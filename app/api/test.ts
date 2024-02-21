import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // 处理 GET 请求
    res.status(200).json({ message: 'Hello from test API!' });
  } else if (req.method === 'POST') {
    // 处理 POST 请求
    res.status(200).json({ message: 'Received POST request!' });
  } else {
    // 其他请求方法返回 405 方法不允许
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}