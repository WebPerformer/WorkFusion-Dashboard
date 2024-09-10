import React, { ChangeEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const SearchClient: React.FC = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Adicione a lógica aqui, se necessário
  }

  return (
    <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <form>
        <div className="relative">
          <Search className="absolute left-2.5 top-2 h-4 w-4" />
          <Input
            placeholder="Search"
            className="pl-8"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchClient
