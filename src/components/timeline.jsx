import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  Button
} from '@material-tailwind/react'
import {
  BriefcaseIcon,
  CommandLineIcon,
  DocumentIcon
} from '@heroicons/react/24/solid'
// Workshop, Hackathon, Meeting, Event, Competition, Conference

export default function ActivitiesTimeline () {
  return (
    <div className='w-3/4'>
      <Timeline>
        <TimelineItem className='h-28'>
          <TimelineConnector className='!w-[78px]' />
          <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
            <TimelineIcon className='p-3' variant='ghost'>
              <BriefcaseIcon className='h-5 w-5' />

            </TimelineIcon>
            <div className='flex flex-col gap-1'>
              <Typography variant='h6' color='blue-gray'>
                [Event Name]
              </Typography>
              <Typography variant='small' color='gray' className='font-normal'>
                [Date and Time] - [Location]
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className='h-28'>
          <TimelineConnector className='!w-[78px]' />
          <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
            <TimelineIcon className='p-3' variant='ghost' color='red'>
              <CommandLineIcon className='h-5 w-5' />
            </TimelineIcon>
            <div className='flex flex-col gap-1'>
              <Typography variant='h6' color='blue-gray'>
                [Order Name]
              </Typography>
              <Typography variant='small' color='gray' className='font-normal'>
                [Date and Time] - [Location]
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className='h-28'>
          <TimelineHeader className='relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5'>
            <TimelineIcon className='p-3' variant='ghost' color='green'>
              <DocumentIcon className='h-5 w-5' />
            </TimelineIcon>
            <div className='flex flex-col gap-1'>
              <Typography variant='h6' color='blue-gray'>
                [Order Name]
              </Typography>
              <Typography variant='small' color='gray' className='font-normal'>
                [Date and Time] - [Location]
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
