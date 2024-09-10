'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import StatusFilter from './StatusFilter'
import ProjectsCards from './ProjectsCards'
import SearchClient from './SearchClient'
import { CirclePlus } from 'lucide-react'

type Status = 'inProgress' | 'completed'

const Projects = () => {
  const [selectedStatuses, setSelectedStatuses] = useState<Status[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const handleFilterChange = (status: Status) => {
    setSelectedStatuses((prev) => {
      if (prev.includes(status)) {
        return prev.filter((value) => value !== status)
      } else {
        return [...prev, status]
      }
    })
    setCurrentPage(1)
  }

  const handleResetFilters = () => {
    setSelectedStatuses([])
    setCurrentPage(1)
  }

  const shouldShowProject = (status: string) => {
    if (selectedStatuses.length === 0) {
      return true
    } else {
      return selectedStatuses.includes(status as Status)
    }
  }

  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl text-foreground">
          Projects{' '}
          <span className="text-sm text-muted-foreground">by Empresa .inc</span>
        </h1>
        <div className="flex items-center gap-2">
          <SearchClient />
          <StatusFilter
            selectedStatuses={selectedStatuses}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
          />
          <Button>
            Add Client <CirclePlus className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
      <ProjectsCards
        shouldShowProject={shouldShowProject}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  )
}

export default Projects
