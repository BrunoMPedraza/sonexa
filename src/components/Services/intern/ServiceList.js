import React, { useContext, useState } from 'react'
import { ServiceContext } from './ServiceContext';
import SingleService from '../ServiceSingle';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

export const ServiceList = () => {
    const { sArray, index, loader } = useContext(ServiceContext)
    const [services, setServices] = sArray;
    const [sIndex, setSIndex] = index;
    const [loading, setLoading] = loader;
    const paginationSize = 10;

    const changePagination = (e, op) => {
        e.preventDefault();
        console.log('previous: ', sIndex, 'next: ', sIndex + op);
        if(sIndex + op < 0) return;
        if(sIndex + op > services.length) return;
        setSIndex(sIndex + op);
    }

    const mapService = (service, current) => {
        let mappedService = [];
        let itemsToShow = current + paginationSize > service.length ? service.length - current : paginationSize;
        for (let i = 0; i < itemsToShow; i++) {
            if (service[current + i] !== undefined || service[current + i] !== null) {
                mappedService.push(service[current + i]);
            }
        }
        return mappedService;
    }

    return (
        <div>
            <div className="pagination-display">
                <AiOutlineArrowLeft 
                id='arrow-pagination-left' 
                className='arrow'
                onClick={(e) => changePagination(e, -10)} 
                />
                
                <AiOutlineArrowRight id="arrow-pagination-right" 
                className='arrow'
                onClick={(e) => changePagination(e, 10)} 
                />

                <div className='pagination-counter-white'>{sIndex} - {sIndex + paginationSize > services.length ? services.length : sIndex + paginationSize}</div>
                <div className='pagination-counter-white-small'>{services.length}</div>
            </div>
            <ul>
                {mapService(services, sIndex).map(item => {
                    return (
                        <SingleService
                            id={item.id}
                            url={item.url}
                            thumbnailUrl={item.thumbnailUrl}
                            title={item.title}
                        />
                    )
                })}
            </ul>
        </div>

    )
}


