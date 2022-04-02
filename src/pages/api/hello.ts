import type { NextApiRequest, NextApiResponse } from 'next'

function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ name: 'John Doe' })
}

export default handler
