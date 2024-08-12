import prisma from '@/lib/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET(request: Request, context: { params: { id: string } }) { 

  const { id } = context.params

  const todo = await prisma.todo.findFirst({
    where: {
      id
    }
  })

  if (!todo) {
    return NextResponse.json({
      message: 'Tarea no encontrada'
    }, {
      status: 404
    })
  }

  return NextResponse.json(todo)
}