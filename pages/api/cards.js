
import { connectToDatabase } from '../../lib/db';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === 'GET') {
    const jobs = await db.collection('carrier-portal').find({}).toArray();
    res.status(200).json(jobs);
  }

  if (req.method === 'POST') {
    const { title, subtitle } = req.body;
    const newJob = { title, subtitle };

    await db.collection('carrier-portal').insertOne(newJob);
    res.status(201).json(newJob);
  }
}
