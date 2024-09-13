import { getServerSession } from '#auth'
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  const { id } = event.context.params
  const { title, content } = await readBody(event)

  try {
    const updatedDocument = await event.context.prisma.document.update({
      where: {
        userId: session.user.id,
        id: id,
      },
      data: {
        title,
        content,
      },
    })

    return {
      success: true,
      document: updatedDocument,
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    }
  }
})
