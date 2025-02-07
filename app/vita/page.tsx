import React from 'react'
import Image from 'next/image'
import { Cormorant_Garamond, Karla } from 'next/font/google'

// Fix: Added 'latin' subsets to avoid preload error
const my_font = Cormorant_Garamond({ weight: '700', subsets: ['latin'] });
const my_font2 = Karla({ weight: '300', subsets: ['latin'] });

const Vita = () => {
  return (
    <div className={`${my_font.className} bg-maincolor mt-[100px]`}>
      <div className='relative'>
        <Image src="/assets/images/schuller_background.svg" width={1540} height={353} alt='bg' />
        <div className='absolute top-[110px] left-[110px] flex flex-col'>
          <span className={`${my_font.className} font-[400] text-[27px] text-[#C29E76]`}>Armina Aristak</span>
          <span className={`${my_font.className} text-[60px]`}>VITA</span>
        </div>
      </div>
      <div className='flex pt-[30px] pb-[30px] justify-evenly bg-maincolor pl-[40px]'>
        <Image src="/assets/images/img111.svg" width={446} height={773} alt='img' />
        <div className={`${my_font2.className} flex flex-col text-black justify-around w-[779px] text-[22px]`}>
          <span className={`${my_font.className} text-[#C29E76] text-[58px]`}>Armina Aristak</span>
          <span>
            Doktorandin im Fach Musikpädagogik an der Martin-Luther-Universität Halle-Wittenberg. 
            Stipendiatin des SWR Vokalensembles. Preisträgerin 2016 und 2018 beim Internationalen 
            Festival Junger Opernsänger Schloß Rheinsberg, bei dem sie in zahlreichen Konzerten und 
            Opernaufführungen auftrat. Die Arbeit mit verschiedenen Dirigenten und Regisseuren hinterließ 
            einen tiefen und positiven Eindruck auf ihren musikalischen Lebensweg. Es folgten Auftritte 
            mit dem Brandenburgischen Orchester, die Teilnahme an verschiedenen Opernaufführungen mit 
            kleinen solistischen Partien sowie Solo-Konzerte in Baden-Baden, Gechingen, Göppingen, 
            Stuttgart, Mittelbergheim.
          </span>
          <span>
            <b>Armina Aristak</b> war schon als Kind von Musik fasziniert. Geboren in Armenien, hat sie den 
            Namen ihres Vaters als Künstlernamen angenommen. Ihre musikalische Laufbahn hat sie bereits 
            als Siebenjährige in ihrer Geburtsstadt Eriwan begonnen. Während der Jahre in der Musikschule 
            trat sie als Solistin in zahlreichen Konzerten auf.
          </span>
          <span>
            Bereits als Teenager hat sie zudem angefangen, erste pädagogische Erfahrungen in der Vermittlung 
            des Faches Gesang zu sammeln. Noch während ihres Studiums an der Musikhochschule Komitas in 
            Eriwan eröffnete sie ihr eigenes Musikstudio für Kinder und Jugendliche. Hier hatten Kinder und 
            Jugendliche die Möglichkeit, Singen zu lernen, aber auch kleine Auftritte zu absolvieren. 
            Erwähnenswert sind die Aufführungen „The Sounds of Music“ und „Snow White“.
          </span>
          <span>
            Dadurch, dass sie selbst weiterhin auftrat, konnte sie die Gesangs- und Theaterkultur besser 
            kennenlernen und ihr Wissen an die Schüler weitergeben.
          </span>
        </div>
      </div>
      <div className={`${my_font2.className} flex bg-maincolor text-black pl-[120px]`}>
        <span className='w-[1268px] text-[24px] border-black border-t pt-[30px] pb-[30px]'>
          Ihre Schüler im Alter von 4 bis 16 Jahren nahmen erfolgreich an verschiedenen Wettbewerben teil. 
          Sie traten sowohl solistisch als auch im Chor und Ensemble auf und gewannen diverse Preise. 
          Von 2013 bis 2016 absolvierte Armina Aristak erfolgreich die Masterausbildung im Fach Gesang an 
          der Hochschule für Musik und Darstellende Kunst Stuttgart.
          Bereits als Studentin durfte sie als Stipendiatin bei mehreren Produktionen des SWR Vokalensembles teilnehmen.
        </span>
      </div>
      <div className='flex flex-col bg-maincolor text-black pl-[120px]'>
        <Image src="/assets/images/img000.svg" width={1260} height={521} alt='pic' />
        <span className={`${my_font2.className} w-[1278px] text-[24px] mt-[40px]`}>
          Ergänzend zu ihrem Hochschulstudium nahm sie an Meisterkursen bei Margreet Honig, 
          Brigitte Fassbaender und Stephan Rügamer teil.
          Seit mehreren Jahren unterrichtet sie erfolgreich in Deutschland Kinder und Erwachsene im 
          Fach Gesang. Im Mai 2017 gewann ihre damals 8-jährige Schülerin einen Platz am Staatlichen 
          Kinder-Opernchor in Stuttgart. 2018 gewann eine andere Schülerin bei „Jugend musiziert“ im 
          Bereich Musical den 2. Platz. Im selben Jahr ist ihre nun 10-jährige Schülerin beim 
          Gesangswettbewerb FEURICH in Wien Preisträgerin geworden. Im Juli 2019 gewann ihre 
          11-jährige Schülerin den Förderpreis der Kreissparkasse Waiblingen.
          <br /><br />
          <span>
            Armina Aristak stimmt ihren Gesangsunterricht auf das Alter ihrer Schüler, auf musikalische 
            Vorkenntnisse und auf deren Interessen ab. Für jede Altersgruppe gibt es spezielle 
            Unterrichtsmethoden, mit deren Hilfe Musik leicht zugänglich gemacht und effektiv verstanden 
            werden kann. Unabhängig vom Alter fördert die Unterrichtsmethode von Armina Aristak die 
            flexible Arbeit des Gehirns und die mentale Ausgeglichenheit.
          </span>
        </span>
      </div>
    </div>
  )
}

export default Vita
