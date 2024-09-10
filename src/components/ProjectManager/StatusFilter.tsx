import React from 'react'
import { Filter, Check, Minus } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

type Status = 'inProgress' | 'completed'

interface FilterButtonProps {
  status: Status
  isActive: boolean
  onClick: (status: Status) => void
}

const FilterButton: React.FC<FilterButtonProps> = ({
  status,
  isActive,
  onClick,
}) => (
  <Button
    variant="ghost"
    className="flex items-center justify-start gap-2 w-full p-0"
    onClick={() => onClick(status)}
  >
    {isActive ? (
      <div className="bg-primary p-1 rounded-md">
        <Check className="w-4 h-4 text-background" />
      </div>
    ) : (
      <div className="bg-primary/20 text-primary p-1 rounded-md">
        <Minus className="w-4 h-4" />
      </div>
    )}
    <span>{status === 'inProgress' ? 'In Progress' : 'Completed'}</span>
  </Button>
)

interface StatusFilterProps {
  selectedStatuses: Status[]
  onFilterChange: (status: Status) => void
  onResetFilters: () => void
}

const StatusFilter: React.FC<StatusFilterProps> = ({
  selectedStatuses,
  onFilterChange,
  onResetFilters,
}) => {
  const isFilterActive = (status: Status) => selectedStatuses.includes(status)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          Filter <Filter className="w-4 h-4 ml-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="end">
        <div className="p-4">
          <h3 className="mb-2 text-xs text-muted-foreground">
            Filter by status
          </h3>
          <div>
            <FilterButton
              status="inProgress"
              isActive={isFilterActive('inProgress')}
              onClick={onFilterChange}
            />
            <FilterButton
              status="completed"
              isActive={isFilterActive('completed')}
              onClick={onFilterChange}
            />
          </div>
          {selectedStatuses.length > 0 && (
            <Button
              variant="outline"
              onClick={onResetFilters}
              className="mt-4 w-full"
            >
              Reset
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default StatusFilter
