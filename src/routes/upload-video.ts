import { FastifyInstance } from "fastify";
import { fastifyMultipart } from '@fastify/multipart'
import { prisma } from "../lib/prisma";
import { randomUUID } from "node:crypto";
import path from "node:path";
import fs from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const pump = promisify(pipeline)

export async function uploadVideoRoute(app: FastifyInstance){
    app.register(fastifyMultipart, {
        limits: {
            fileSize: 1_048_576 * 25 //25mb
        }
    })

    app.post('/videos', async (request, reply) => {
        const data = await request.file()

        if(!data){
            return reply.status(400).send({ error: 'Missin flie input data.'})
        }

        const extension = path.extname(data.filename)

        if(extension != '.mp3'){
            return reply.status(400).send({ error: 'Inalid input type, please upload a MP3'})
        }

        const fileBaseName = path.basename(data.filename, extension)

        const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`

        const uploadDestination = path.resolve(__dirname, '../../tmp', fileUploadName)

        const result = await pump(data.file, fs.createWriteStream(uploadDestination))
        
        return reply.send('success')

    })
}