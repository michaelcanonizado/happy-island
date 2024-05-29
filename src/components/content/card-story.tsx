import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import { bayon } from '@/styles/fonts';

const CardStory = ({
    className,
    title,
    body,
    titleImage,
    bodyImage
}:{
    className?:string,
    title:string,
    body:string[],
    titleImage:string,
    bodyImage:string
}) => {
  return (
    <section>
        <div className='relative pt-20 min-h-[500px] pb-4'>
            <CardStoryTitleOverlay 
            className="absolute bottom-0 z-10 text-background-100" 
            title={title} 
            body={body}/>
            <div className="absolute inset-0 bg-red-500">
                <Image 
                src={titleImage} 
                fill
                alt={title}
                style={{
                    objectFit:"cover",
                    objectPosition:"center"
                }}/>
            </div>
            <CardStoryTitleOverlay title={title} body={body}/>
        </div>
        <div className='relative min-h-[500px] pb-8'>
            <CardStoryBodyOverlay 
            className="absolute bottom-0 z-10 text-background-100" 
            title={title} 
            body={body}/>
            <div className="absolute inset-0 bg-red-500">
                <Image 
                src={bodyImage} 
                fill
                alt={title}
                style={{
                    objectFit:"cover",
                    objectPosition:"center"
                }}/>
            </div>
            <CardStoryBodyOverlay title={title} body={body}/>
        </div>
        
    </section>
  )
}

const CardStoryTitleOverlay = ({
    className,
    title,
    body
}:{
    className?:string,
    title:string,
    body:string[]
})=> {
    return (
        <div className={cn('px-8 mb-0', className)}>
            <div className=''>
                <h2 className={`${bayon.variable} font-display tracking-widest text-4xl`}>{title}</h2>
            </div>
            <div className=''>
                <p className=''>{body[0]}</p>
            </div>
        </div>
    )
}

const CardStoryBodyOverlay = (
    {
        className,
        title,
        body
    }:{
        className?:string,
        title:string,
        body:string[]
    }
) => {
    return (
        <div className={cn('px-8 mb-8', className)}>
            {body.map((text) => {
                return (
                    <div className='mb-4'>
                        <p className=''>{text}</p>
                    </div>
                )
            })} 
        </div>
    )
}

export default CardStory