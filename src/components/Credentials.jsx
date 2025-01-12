'use client'
import React, { useRef, useEffect, useState } from 'react'

const Card = ({ children, className = '', onMouseEnter, onMouseLeave, index }) => (
  <div 
    className={`bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-96 mx-4
      transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative ${className}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="absolute top-2 left-2 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
      {index}
    </div>
    {children}
  </div>
)

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
)

const ProjectCard = ({ title, organization, status, logo, onMouseEnter, onMouseLeave, index }) => (
  <Card onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} index={index}>
    <CardContent>
      <div className="space-y-2 mt-4">
        <h3 className="font-medium text-sm text-gray-600 leading-tight">
          {title}
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="font-semibold text-base">{organization}</p>
            <p className="text-sm text-gray-500">{status}</p>
          </div>
          {logo && (
            <div className="flex justify-end">
              <img 
                src={logo} 
                alt={`${organization} logo`}
                className="w-12 h-12 object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
)

const ScrollTrack = ({ projects, className = '', isPaused, onHover, onLeave, initialOffset = 0 }) => {
  const scrollRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(initialOffset)
  const [isInitialized, setIsInitialized] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer && !isInitialized) {
      scrollContainer.scrollLeft = initialOffset
      setContainerWidth(scrollContainer.scrollWidth / 2)
      setIsInitialized(true)
    }
  }, [initialOffset, isInitialized])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    let animationFrameId
    let lastTimestamp = 0
    const scrollSpeed = 1

    const animate = (timestamp) => {
      if (!isPaused) {
        if (lastTimestamp !== 0) {
          setScrollPosition(prev => {
            const newPosition = prev + scrollSpeed
            if (scrollContainer) {
              if (newPosition >= containerWidth) {
                return 0
              }
              scrollContainer.scrollLeft = newPosition
              return newPosition
            }
            return prev
          })
        }
        lastTimestamp = timestamp
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isPaused, containerWidth])

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden whitespace-nowrap py-8"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`original-${index}`}
            title={project.title}
            organization={project.organization}
            status={project.status}
            logo={project.logo}
            index={project.index}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          />
        ))}
        {projects.map((project, index) => (
          <ProjectCard
            key={`duplicate-${index}`}
            title={project.title}
            organization={project.organization}
            status={project.status}
            logo={project.logo}
            index={project.index}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          />
        ))}
      </div>
    </div>
  )
}

const projects = [
  {
    title: "Detailed Study Report of Potential Terminals for Operation of Passenger cum Ro-Ro Ferry Service",
    organization: "Gujarat Maritime Board",
    status: "PMC / TPI",
    logo: "/api/placeholder/48/48",
    index: 1
  },
  {
    title: "Rural Regional Water Supply Scheme of MJP in Maharashtra",
    organization: "Maharashtra Jeevan Pradhikaran Works Division",
    status: "PMC",
    logo: "/api/placeholder/48/48",
    index: 2
  },
  {
    title: "Bulk Water Supply & U/G Drainage Scheme in Various Location in Gujarat",
    organization: "Gujarat Water Supply & Sewerage Board",
    status: "PMC / TPI",
    logo: "/api/placeholder/48/48",
    index: 3
  },
  {
    title: "Water Supply Project at Village Balivada",
    organization: "McCain Foods (I) Private Limited",
    status: "PMC",
    logo: "/api/placeholder/48/48",
    index: 4
  },
  {
    title: "Major water supply projects for in Bikaner, Ajmer & Udaipur Regions",
    organization: "Public Health Engineering Department, Rajasthan",
    status: "PMC / TPI",
    logo: "/api/placeholder/48/48",
    index: 5
  },
  {
    title: "Water Supply System for Villages in Narmada District",
    organization: "Water & Sanitation Management Organization",
    status: "PMC",
    logo: "/api/placeholder/48/48",
    index: 6
  },
  {
    title: "Rehab and Open Market Sale Tenements in Mumbai",
    organization: "Maharashtra Housing & Area Development Authority",
    status: "PMC",
    logo: "/api/placeholder/48/48",
    index: 7
  },
  {
    title: "Water Supply Scheme for Package NC 25",
    organization: "Gujarat Water Infrastructure Limited",
    status: "PMC",
    logo: "/api/placeholder/48/48",
    index: 8
  },
  {
    title: "Water Supply, Drainage & SWD Project under AMRUT Scheme",
    organization: "Junagadh Municipal Corporation",
    status: "PMC / TPI",
    logo: "/api/placeholder/48/48",
    index: 9
  },
  {
    title: "Water Supply Scheme in various location in Gujarat",
    organization: "Torrent Pharmaceuticals Limited",
    status: "PMC",
    logo: "/api/placeholder/48/48",
    index: 10
  },
  {
    title: "Dewas Industrial Water Supply Project, M.P",
    organization: "National Buildings Construction Corporation Limited",
    status: "PMC",
    logo: "/api/placeholder/48/48",
    index: 11
  },
  {
    title: "Water Supply Scheme at GIDC-Dahej",
    organization: "Gujarat Industrial Development Corporation",
    status: "PMC / TPI",
    logo: "/api/placeholder/48/48",
    index: 12
  }
]

const ProjectCards = () => {
  const [isPaused, setIsPaused] = useState(false)
  const oddProjects = projects.filter(project => project.index % 2 !== 0)
  const evenProjects = projects.filter(project => project.index % 2 === 0)

  const cardWidth = 384  // w-96 = 24rem = 384px
  const cardMargin = 32  // mx-4 = 1rem * 2 = 32px
  const totalCardWidth = cardWidth + cardMargin
  const totalWidth = totalCardWidth * projects.length
  const secondRowOffset = totalWidth / 2  // 50% offset

  return (
    <main className="min-h-screen text-black bg-gray-50 py-12">
      <div className="container mx-auto space-y-4">
        <ScrollTrack 
          projects={oddProjects} 
          className="border-b border-gray-200 pb-4"
          isPaused={isPaused}
          onHover={() => setIsPaused(true)}
          onLeave={() => setIsPaused(false)}
          initialOffset={0}
        />
        <ScrollTrack 
          projects={evenProjects} 
          className="pt-4"
          isPaused={isPaused}
          onHover={() => setIsPaused(true)}
          onLeave={() => setIsPaused(false)}
          initialOffset={secondRowOffset}
        />
      </div>
    </main>
  )
}

export default ProjectCards