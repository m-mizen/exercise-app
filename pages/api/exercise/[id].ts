import type { NextApiRequest, NextApiResponse } from 'next'
import { DataStore } from '@aws-amplify/datastore';
import { Exercise } from '../../../src/models';

interface GetResponse {
    data: Exercise
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GetResponse>
) {

    if (!req.query.id || Array.isArray(req.query.id)) {
        res.status(400);
        return;
    }

    const model = await DataStore.query(Exercise, req.query.id);

    if (!model) {
        res.status(404);
        return;
    }

    if (req.method === 'DELETE') {
        await DataStore.delete(model);
        res.status(200);
        return;
    }

    if (req.method === 'GET') {
        res.status(200).json({ data: model });
        return;
    }

    if (req.method === 'PUT') {
        /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
        const updated = await DataStore.save(Exercise.copyOf(model, item => ({
            ...item,
            name: req.body.name
        })));
        res.status(201).json({ data: updated });
        return;
    }

    res.status(405);
}
