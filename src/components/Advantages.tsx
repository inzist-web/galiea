import '@/blocks/advantages.scss'

export default function Advantages() {
  return (
    <section className="advantages">
      <h2 className="advantages__heading">Преимущества работы с нашей компанией:</h2>
      <div className="advantages__cards">
        <div className="advantages__card">
        <p className="advantages_text">Ответственность за начисленные налоги и правильность учета несет не главный бухгалтер, а юридическое лицо – бухгалтерская компания</p>
        </div>
        <div className="advantages__card">
          <p className="advantages_text">Возможная налоговая проверка может происходить на нашей территории, что во многом исключает необоснованные претензии и не позволит парализовать деятельность предприятия.</p>
        </div>
        <div className="advantages__card">
          <p className="advantages_text">Затраты на бухгалтерское сопровождение ограничиваются стоимостью услуг нашей компании, которая значительно ниже расходов на содержание собственной бухгалтерии.</p>
        </div>
        <div className="advantages__card">
          <p className="advantages_text">Высокая квалификация специалистов. Квалификация подтверждена аттестатами профессионального бухгалтера и регулярно повышается на конференциях, курсах и семинарах.</p>
        </div>
      </div>
      <div className="advantages__card advantages__card_size_long">
        <p className="advantages_text">Вы не несете затрат на оборудование рабочих мест бухгалтеров, закупку правовых баз данных и бухгалтерских программ, а также экономите время и деньги на подборе и обучении кадров.</p>
      </div>
    </section>
  )
}