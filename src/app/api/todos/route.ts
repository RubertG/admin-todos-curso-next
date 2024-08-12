import prisma from '@/lib/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const take = Number(searchParams.get('take') ?? '10')
  const skip = Number(searchParams.get('skip') ?? '0')

  if (isNaN(take) || isNaN(skip)) {
    return NextResponse.json({
      error: 'Take o Skip deben ser números'
    }, {
      status: 400
    })
  }

  const todos = await prisma.todo.findMany({
    take,
    skip,
    orderBy: {
      createdAt: 'desc'
    }
  })

  return NextResponse.json(todos)
}