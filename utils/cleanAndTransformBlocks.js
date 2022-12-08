import {v4 as uuid} from 'uuid'

export const cleanAndTransformBlocks = (blocksJSON) => {
    const blocks = JSON.parse(blocksJSON)

    const assignID = (b) => {
        b.forEach((blocks) => {
            blocks.id = uuid()
            if (blocks.innerBlocks?.length) {
                assignID(blocks.innerBlocks)
            }
        });
    }

    assignID(blocks);

    return blocks;

}