import { getServerSession } from '#auth'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  const { id } = event.context.params

  try {
    await event.context.prisma.document.delete({
      where: { 
        userId: session.user.id, 
        id: id 
      },
    })

    return { 
      success: true, 
      message: 'Document deleted successfully' }
  } catch (error: any) {
    return { 
      success: false, 
      error: error.message 
    }
  }
})

