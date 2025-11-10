export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const apiKey = process.env.API_KEY; // your secure key from Vercel
      const formData = req.body; // this will contain the application info

      // TODO: Here’s where you’ll save formData to your database or back office
      console.log('Received application:', formData);

      res.status(200).json({ message: 'Application received successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
