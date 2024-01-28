import { Prisma } from '@prisma/client'
import { unstable_cache } from 'next/cache'
import 'server-only'
import { SERVICES_REVALIDATION_INTERVAL } from '../constants'
import prisma from '../database'
import { messageCache } from './cache'

export const getMessages = async () => {
  const messages = await unstable_cache(
    async () => {
      try {
        const messages = await prisma.user.findMany({})
        return messages
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          return error.message
        }
        throw error
      }
    },
    [messageCache.tag.all()],
    {
      tags: [messageCache.tag.all()],
      revalidate: SERVICES_REVALIDATION_INTERVAL,
    }
  )()

  return messages
}
