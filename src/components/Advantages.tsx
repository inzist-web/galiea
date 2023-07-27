import '@/blocks/advantages.scss'
import Image from 'next/image'
import macbook from '@/images/macbook.png'
import safe from '@/images/safe.png'
import pointers from '@/images/pointers.png'
import circleRight from '@/images/circle-right.png'
import cirlceLeft from '@/images/circle-left.png'
import grath from '@/images/grath.png'

export default function Advantages() {
  return (
    <section className="advantages">
      <h2 className="advantages__heading">Преимущества работы с нашей компанией:</h2>
      <div className="advantages__cards">
        <div className="advantages__card">
          <p className="advantages__text">Ответственность за начисленные налоги и правильность учета несет не главный бухгалтер, а юридическое лицо – бухгалтерская компания</p>
          <Image src={macbook} alt='' className='advantages__image-macbook'></Image>
        </div>
        <div className="advantages__card">
          <p className="advantages__text">Возможная налоговая проверка может происходить на нашей территории, что во многом исключает необоснованные претензии и не позволит парализовать деятельность предприятия.</p>
          <Image src={safe} alt='' className='advantages__image-safe'></Image>
        </div>
        <div className="advantages__card">
          <p className="advantages__text">Затраты на бухгалтерское сопровождение ограничиваются стоимостью услуг нашей компании, которая значительно ниже расходов на содержание собственной бухгалтерии.</p>
          <Image src={pointers} alt='' className='advantages__image-pointers'></Image>        
        </div>
        <div className="advantages__card">
          <p className="advantages__text">Высокая квалификация специалистов. Квалификация подтверждена аттестатами профессионального бухгалтера и регулярно повышается на конференциях, курсах и семинарах.</p>
          <Image src={cirlceLeft} alt='' className='advantages__image-circle-left'></Image>
          <Image src={circleRight} alt='' className='advantages__image-circle-right'></Image>
        </div>
      </div>
      <div className="advantages__card advantages__card_size_long">
        <p className="advantages__text advantages__text_long">Вы не несете затрат на оборудование рабочих мест бухгалтеров, закупку правовых баз данных и бухгалтерских программ, а также экономите время и деньги на подборе и обучении кадров.</p>
        <Image src={grath} alt='' className='advantages__image-grath'></Image>
      </div>
    </section>
  )
}