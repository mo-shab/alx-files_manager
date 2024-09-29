import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
    // GET /status - Check if Redis and DB are alive
    static async getStatus(req, res) {
        const redisAlive = redisClient.isAlive(); // Check if Redis is alive
        const dbAlive = dbClient.isAlive(); // Check if DB is alive

        res.status(200).json({ redis: redisAlive, db: dbAlive });
    }

    // GET /stats - Get the number of users and files in the DB
    static async getStats(req, res) {
        try {
            const usersCount = await dbClient.nbUsers(); // Count all users in the users collection
            const filesCount = await dbClient.nbFiles(); // Count all files in the files collection

            res.status(200).json({ users: usersCount, files: filesCount });
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch stats' });
        }
    }
}

module.exports = AppController;
