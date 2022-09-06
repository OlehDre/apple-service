import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils";

interface QueryNextApiRequest extends NextApiRequest{
    query:{
        id: string
    }
}

export default function getById(req: QueryNextApiRequest, res: NextApiResponse) {
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.end(req.query.id)
    res.json({yourId: req.query.id})
}