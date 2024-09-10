import React from 'react'
import MyPagination from './MyPagination'
import { companies } from '../../../public/data/companies'
import RenderCards from './RenderCards'
import { StaticImageData } from 'next/image'

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

interface ProjectsCardsProps {
  shouldShowProject: (status: string) => boolean
  currentPage: number
  setCurrentPage: (page: number) => void
}

const ProjectsCards: React.FC<ProjectsCardsProps> = ({
  shouldShowProject,
  currentPage,
  setCurrentPage,
}) => {
  const itemsPerPage = 6

  // Filtrando e ordenando as empresas conforme os critérios
  const filteredCompanies: Company[] = companies
    .filter((company) =>
      shouldShowProject(
        company.tasks.done !== company.tasks.total ? 'inProgress' : 'completed',
      ),
    )
    .sort((a, b) => {
      const diffA =
        a.tasks.total && a.tasks.done
          ? parseInt(a.tasks.total, 10) - parseInt(a.tasks.done, 10)
          : 0
      const diffB =
        b.tasks.total && b.tasks.done
          ? parseInt(b.tasks.total, 10) - parseInt(b.tasks.done, 10)
          : 0
      return diffB - diffA
    })

  // Calculando os índices para a paginação
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentCompanies = filteredCompanies.slice(
    indexOfFirstItem,
    indexOfLastItem,
  )

  // Calculando o número total de páginas
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage)

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <RenderCards companies={currentCompanies} />
      </div>
      <div className="mt-6">
        {totalPages > 1 && (
          <MyPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          />
        )}
      </div>
    </div>
  )
}

export default ProjectsCards
