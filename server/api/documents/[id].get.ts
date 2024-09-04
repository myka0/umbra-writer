import { getServerSession } from '#auth'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  const { id } = event.context.params

  try {
    const document = await event.context.prisma.document.findUnique({
      where: { 
        userId: session.user.id, 
        id: id 
      },
    })

    if (!document) {
      return { 
        success: false, 
        error: 'Document not found' }
    }

    return { 
      success: true, 
      document 
    }
  } catch (error: any) {
    return { 
      success: false, 
      error: error.message 
    }
  }
})
