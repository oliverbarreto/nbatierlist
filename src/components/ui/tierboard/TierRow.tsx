import React from 'react'
import Team from '../teams/Team'

export default function TierRow({
  title,
  status,
}: {
  title: string
  status: string
}) {
  

  const teams = [
    {
      id: "12345",
      fullName: "Los Angeles Lakers",
      name: "lakers",
      status: "Dynasty",
    },
    {
      id: "67890",
      fullName: "Boston Celtics",
      name: "celtics",
      status: "TierA",
    },
  ]  
  const filteredTeams = teams.filter(team => team.status === status)
  
  return (
    <div id="row_goat" className="w-full px-2 h-[80px] bg-primary-yellow  text-primary-black  rounded-lg border-2 border-primary-purple flex flex-row justify-start items-center gap-5">
      <h1 className="text-xl lg:text-2xl bg-bg-secondary min-w-[100px]">{title}</h1>
      { filteredTeams.map(team => (
        <Team key={ team.id } team={ team.name } />

      )) }
    </div>
  )
}
