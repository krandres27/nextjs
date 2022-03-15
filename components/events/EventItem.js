import { Button } from '../../ui'
import { AddressIcon, ArrowRightIcon, DateIcon } from '../icons'
import classes from './EventItem.module.css'

const EventItem = ({ event: {title, image, date, location, id} }) => {

  const formatedDate = () => new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formatedAddress = location.replace(', ', '\n')

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formatedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}><ArrowRightIcon /></span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
