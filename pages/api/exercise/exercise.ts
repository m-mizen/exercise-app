import type { NextApiRequest, NextApiResponse } from 'next'
import { DataStore } from '@aws-amplify/datastore';
import { Exercise } from '../../../src/models';

interface GetResponse {
    data: Exercise[]
}

interface PostResponse {
    data: Exercise
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GetResponse | PostResponse>
) {
    if (req.method === 'GET') {
        const models = await DataStore.query(Exercise);
        res.status(200).json({ data: models });
        return;
    }

    if (req.method === 'POST') {
        const newExercise = await DataStore.save(
            new Exercise({
                name: req.body.name
            })
        );
        res.status(201).json({ data: newExercise });
        return;
    }

    res.status(401);
}
