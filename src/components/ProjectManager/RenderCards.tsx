import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '../ui/button'
import { CirclePlus } from 'lucide-react'

interface Task {
  done: string
  total: string
}

interface Company {
  name: string
  desc: string
  image: StaticImageData
  tasks: Task
  members: string[]
}

interface RenderCardsProps {
  companies: Company[]
}

const RenderCards: React.FC<RenderCardsProps> = ({ companies }) => {
  return (
    <>
      {companies.map((company, index) => (
        <div
          key={index}
          className="p-4 border border-border rounded-md cursor-pointer hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-100 ease-linear"
        >
          <div className="flex items-center justify-between">
            <Image
              src={company.image}
              alt={company.name}
              className="w-10 h-10 rounded-md object-cover"
            />
            <Button
              variant={
                company.tasks.done !== company.tasks.total
                  ? 'inProgress'
                  : 'completed'
              }
            >
              {company.tasks.done !== company.tasks.total
                ? 'In Progress'
                : 'Completed'}
            </Button>
          </div>
          <div className="my-4 min-h-20">
            <h1 className="text-lg text-foreground font-bold mb-1">
              {company.name}
            </h1>
            <p className="line-clamp-2">{company.desc}</p>
          </div>
          <div className="flex items-center justify-between">
            <Button variant="outline" className="pointer-events-none">
              Tasks: {company.tasks.done}/{company.tasks.total}
            </Button>
            <div className="flex items-center">
              {company.members.slice(0, 4).map((member, index) => (
                <Image
                  src={member}
                  alt=""
                  key={index}
                  className={`w-10 h-10 ${index > 0 ? '-ms-4' : ''} rounded-full border-4 border-background`}
                />
              ))}
              {company.members.length > 4 && (
                <div className="flex items-center justify-center w-10 h-10 -ms-4 bg-border rounded-full border-4 border-background pr-1">
                  +{company.members.length - 4}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      {companies.length === 0 && (
        <div className="col-span-1 h-36 col-start-2 my-10 p-4 border border-dashed border-foreground/20 rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-100 ease-linear">
          <CirclePlus className="ml-2 w-6 h-6 my-3 text-primary" />
          <p>Add Client</p>
        </div>
      )}
    </>
  )
}

export default RenderCards
