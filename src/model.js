import image from './assets/image.png'
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from './classes/blocks'

export const model = [
    new TitleBlock( 'Конструктор сайтов на чистом JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem'
        }
    }),

    new ImageBlock( image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Ваша реклама'
    }),

    new ColumnsBlock( [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae commodi doloremque illo nostrum quaerat qui quod recusandae!',
        'Amet, aspernatur atque cum cumque deserunt dolores esse odit omnis quia unde?',
        'Amet animi autem consequuntur culpa cum debitis, doloribus ducimus eum illo impedit laborum nam, nihil nulla odit officiis quaerat quam quibusdam reiciendis, repellendus sed sunt ut.'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),

    new TextBlock('Здесь может быть Ваша реклама', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })



]
