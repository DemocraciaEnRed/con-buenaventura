import React from 'react'
import t from 't-component'
import { browserHistory, Link } from 'react-router'
import topicStore from 'lib/frontend/stores/topic-store/topic-store'
import Social from 'lib/frontend/site/topic-layout/topic-article/social/component'
import Timeago from 'lib/frontend/site/timeago'

export default ({ topic }) => {
  const linkTopic = () => { 
    window.location.href = topic.url
  }
  return (
  <div 
    onClick={linkTopic}
    className='topic-card panel panel-default panel-md'>
    <div
      className='panel-heading'
      style={{ backgroundImage: `url("${topicStore.getCoverUrl(topic)}")`}} />
      {
        topic.action && topic.action.method && 
        <div className="action-topic">
          <div className="icon-wrapper">
            <img src={`/lib/frontend/site/home-multiforum/icon-${topic.action.method}.svg`}/> 
          </div>
          <span>{t(`admin-topics-form.action.${topic.action.method}`)}</span>
        </div>
      }
    <div className='topic-card-wrapper'>
      <div className='panel-body'>
        <h3>{topic.mediaTitle}</h3>
      </div>
      <div className='topic-card-footer'>
        <div className='left-wrapper'>
          <p className='text-muted'>
            {topic.action.method === "" ?
            `${topic.commentersCount} ${topic.commentersCount === 1 ? t('proposal-article.participant.singular') : t('proposal-article.participant.plural')}` :
            `${topic.action.count} ${topic.action.count === 1 ? t('proposal-article.participant.singular') : t('proposal-article.participant.plural')}`
            }
          </p>
          { topic.closingAt &&
            <p className='meta-information'>
              <i className='icon-clock' />
              <span className='time-ago-label'>
                {(topic.closed ? t('common.closed') : t('common.close')) + ' '}
              </span>
              <Timeago className='meta-timeago' date={topic.closingAt} />
            </p>
          }
        </div>
        <div className='social-links'>
          <Social topic={topic}/>
        </div> 
      </div>
    </div>
  </div>
  )
}
