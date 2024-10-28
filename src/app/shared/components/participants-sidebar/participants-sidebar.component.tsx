'use client'
import Image from 'next/image'
import Link from 'next/link'

import React, { FC } from 'react'

import { imagesMap } from '@/libs/imagesMap'

import styles from './participants-sidebar.module.scss'

interface IOwner {
  nameParticipant: string
  apartments: number
  housing: number
  image: keyof typeof imagesMap
  category: 'owner'
}

interface IBroker {
  nameParticipant: string
  proposals: number
  image: keyof typeof imagesMap
  category: 'broker'
}

interface IBuilder {
  nameParticipant: string
  proposals: string
  image: keyof typeof imagesMap
  category: 'builder'
}

interface IParticipantsSidebarProps {
  nameHeader: string
  classNameButton: string
  svgColor: string
  participants: (IOwner | IBroker | IBuilder)[]
}
const ParticipantsSidebarComponent: FC<Readonly<IParticipantsSidebarProps>> = ({
  classNameButton,
  nameHeader,
  svgColor,
  participants,
}) => {
  const getProposals = (participant: IOwner | IBroker | IBuilder) => {
    switch (participant.category) {
      case 'owner':
        return (
          <p className={styles.proposals}>
            {participant.apartments} квартир в {participant.housing} ЖК
          </p>
        )
      case 'broker':
        return <p className={styles.proposals}>{participant.proposals} пропозицій</p>
      case 'builder':
        return <p className={styles.proposals}>{participant.proposals}</p>
    }
  }

  return (
    <div className={`${styles.blockRight} flex flex-col`}>
      <div className='flex flex-col md:flex-row lg:flex-col'>
        <div className={`${styles.listPeople} flex flex-col`}>
          <div className='flex gap-3'>
            <p className={styles.titList}>{nameHeader}</p>
            <button className={`${classNameButton}  flex items-center gap-1.5 justify-center`}>
              20
              <svg
                width='15'
                height='9'
                viewBox='0 0 15 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.0417 1.66675L13.875 4.50008M13.875 4.50008L11.0417 7.33341M13.875 4.50008H1.125'
                  stroke={svgColor}
                  strokeWidth='1.41667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
          <ul className='pt-6 flex flex-col gap-3'>
            {Array.isArray(participants) && participants.length > 0 ? (
              participants.map((participant, index) => {
                const image = imagesMap[participant.image]
                return (
                  <li key={index}>
                    <Link href='#' className='flex items-center gap-3'>
                      <Image src={image} alt={participant.nameParticipant} width={42} height={42} />
                      <div className='flex flex-col'>
                        <p className={styles.name}>{participant.nameParticipant}</p>
                        {getProposals(participant)}
                      </div>
                    </Link>
                  </li>
                )
              })
            ) : (
              <p>Немає учасників</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ParticipantsSidebarComponent
