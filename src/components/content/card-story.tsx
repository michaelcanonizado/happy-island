import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import { bayon } from '@/styles/fonts';

const CardStory = ({
    className,
    align,
    title,
    body,
    titleImage,
    bodyImage,
}:{
    className?:string,
    align:"text-left"|"text-right"|"text-center"|"text-justify",
    title:string,
    body:string[],
    titleImage:string,
    bodyImage:string
}) => {
  return (
    <section className='h-fit'>
        <div className='relative pt-20 min-h-[500px] pb-4'>
            <CardStoryTitleOverlay 
            className="absolute bottom-0 z-10 text-background-100" 
            title={title} 
            body={body}
            align={align}/>
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
            <CardStoryTitleOverlay title={title} body={body} align={align}/>
        </div>
        <div className='relative min-h-[250px] pb-8'>
            <CardStoryBodyOverlay 
            className="absolute bottom-0 z-10 text-background-100" 
            body={body} align={align}/>
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
            <CardStoryBodyOverlay body={body} align={align}/>
        </div>
        
    </section>
  )
}

const CardStoryTitleOverlay = ({
    className,
    align,
    title,
    body
}:{
    className?:string,
    align:"text-left"|"text-right"|"text-center"|"text-justify",
    title:string,
    body:string[]
})=> {
    return (
        <div className={cn('px-8 mb-0', className)}>
            <div className=''>
                <h2 className={cn(`${bayon.variable} font-display tracking-widest text-4xl`, align)}>{title}</h2>
            </div>
            <div className=''>
                <p className={cn("",align)}>{body[0]}</p>
            </div>
        </div>
    )
}

const CardStoryBodyOverlay = (
    {
        className,
        align,
        body
    }:{
        className?:string,
        align:"text-left"|"text-right"|"text-center"|"text-justify",
        body:string[]
    }
) => {
    return (
        <div className={cn('px-8 mb-8', className)}>
            {body.map((text) => {
                return (
                    <div className='mb-4'>
                        <p className={cn("", align)}>{text}</p>
                    </div>
                )
            })} 
        </div>
    )
}

export default CardStory