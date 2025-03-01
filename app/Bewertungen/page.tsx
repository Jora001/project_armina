import { Footer } from "@/components";
import React from "react";
import Image from "next/image";

const Bewertungen = () => {
  const data = [
    {
      name: "Petra Harres",
      text: `Ich habe im Internet nach einer Gesangslehrerin gesucht und bin dabei auf Armina gestroffen-ein absoluter Glücksfall!!!
      Sie hat eine tolle, ausdrucksstarke und kraftvolle Stimme und ist eine sehr einfühlsame, begabte Lehrerin. Anhand von Beispielen verdeutlicht sie, was man verbessern kann. Dabei bleibt sie immer geduldig und ruhig. Jede Gesangsstunde mit ihr ist ein Gewinn und macht obendrein noch richtig Spaß`,
    },
    {
      name: "Meyer Irmgard",
      text: `Meine Tochter hat mir Gesangsstunden bei Armina geschenkt.
      Armina hat eine tolle Stimme, arbeitet mit großer Freude und überträgt diese Freude. Einfühlsam und kompetent lehrt sie Gesangstechniken und übte diese mit mir, so dass nach kurzer Zeit ein Erfolg zu hören war. Es hat viel Spaß gemacht!`,
    },
    {
      name: "Karo",
      text: `Armina hat mich so viel weiter gebracht. Meine Technik hat sich stark verbessert und ich fühle mich jetzt sicherer. Sie hat ein gutes Gespür dafür, welche Lieder zur Stimme passen und wie man die eigene Stimme perfekt ausarbeitet. Außerdem ist sie einfach ein toller Mensch, mit dem man sich wohl fühlt und gerne Zeit verbringt.
      Ich danke Dir nochmal von Herzen für alles Armina.`,
    },
    {
      name: "Mirja und Davide",
      text: `Wir singen als Duett bei Armina seit fast 2 Jahren und sind begeistert von ihr. Ihre geduldige und liebe Art geben einem Sicherheit. Wir haben schon viel gelernt bei ihr und immer Spaß dabei gehabt. Sie findet immer die passende Kombination aus unseren Wünschen und Geschmäckern und unserem musikalischen Können.
      Wir freuen uns schon auf unsere nächste Stunde 🙂`,
    },
    {
      name: "Olivier",
      text: `Armina ist eine wunderbare Lehrerin, die die Leidenschaft des Singens vermitteln kann. Als kompletter Anfänger könnte ich Schritt für Schritt in ihrer Begleitung diese neue Welt entdecken. Ich kann jedem nur empfehlen, das Singen zu probieren und es mit Armina zu tun.`,
    },
    {
      name: "Deborah Yates",
      text: `Ich nehme seit einiger Zeit Gesangsstunden bei Armina und bin sehr froh, sie gefunden zu haben. Armina ist eine sympathische, einfühlsame und liebenswürdige Lehrerin. Sie vermittelt neben der Gesangstechnik auch eine große Freude am Singen. Armina hat eine wunderschöne Stimme und eine große Begabung – als Künstlerin und Lehrerin.
      Ich kann sie nur jedem empfehlen.`,
    },
    {
      name: "Anastasia",
      text: `Mein Sohn hatte in der Aussprache Schwierigkeiten gehabt. Schon nach ein paar Monaten Unterricht bei der Armina, wurde die Zungenmuskulatur gestärkt und die Aussprache hat sich normalisiert!
      Eine tolle Lehrerin? Dankeschön`,
    },
    {
      name: "Gisbert Niederführ",
      text: "Ich singe seit über 40 Jahren, aber erst bei Armina habe ich gelernt, was Gesang eigentlich bedeutet. Und welche Fortschritte – bei ihr – auch in kurzer Zeit möglich sind. Die Gesangsstunden zählen für mich immer zu den Highlights der Woche. Egal wie genervt, gestresst oder frustriert ich direkt von der Arbeit zu ihr komme, danach ist alles gut.",
    },
    {
      name: "Karlova Yevgeniya",
      text: `Wir bedanken uns ganz herzlich bei Armina! Unsere Tochter nimmt bei Armina seit drei Jahre Gesangsunterricht. Sie hat im Jahr 2018 den zweiten Platz in Wien bei einem internationalen Wettbewerb bekommen, im letzten Jahr ist sie Preisträgerin bei der Sparkasse Stiftung geworden!
      Arminia ist sehr kompetent, sehr professionell, hat viel Geduld, macht ihre Arbeit sehr einfühlsam und mit viel Liebe. Wir wünschen Armina und uns auch viel Erfolg und viel Spaß
      Und noch mal vielen, vielen Dank
      Fam. Karlov`,
    },
    {
      name: "Sarah A.",
      text: `Ich habe bereits in der Probestunde so viel Neues gelernt, was ich aus meinem früheren Gesangsunterricht gar nicht kannte. Es gefällt mir auch, dass Armina individuell auf den Schüler eingeht.`,
    },
    {
      name: "Lara",
      text: `Armina ist super! Ich hatte wegen meines Umzugs nach einer neuen Gesanglehrerin gesucht und wusste direkt nach der Probestunde, dass Armina genau die Richtige für mich ist! Sie nimmt sich Zeit, arbeitet intensiv mit mir an meiner Stimme und bringt mir neue Techniken und Atemübungen bei. Nach mittlerweile einem halben Jahr Unterricht, merke ich schon einen deutlich Fortschritt. Ich freue mich auf viele weitere Gesangsstunden mit ihr. 🙂`,
    },
    {
      name: "Françoise Bergognon",
      text: `Ich bin spät (57 Jahr) auf die Idee gekommen Gesang Unterricht zu nehmen und mit Armina habe ich so viel entdecken können was Gesang Unterricht seien kann. Sie hört die kleinste Detail der Stimme, sie passt sich auf mich an aber fördert sie mich immer weiter und lässt mich auf diese Weise viel Entdecken. Wir singen in verschiedene Sprache von französische Chansons bis Mozart . Das Gesang mit Armina ist ein Gück für meine Seele.`,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#EFEBE8] flex flex-col items-center">
      <div className="flex-grow container mx-auto mt-40 md:mt-16 lg:mt-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/assets/images/vertical_line.svg"
              alt="vertical_line"
              width={7}
              height={45}
              className="mt-[10px]"
            />
            <span className="text-3xl md:text-5xl lg:text-6xl font-cormorant mt-2 md:mt-4">
              Was Unsere Schüler Sagen
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {data.map((review, index) => (
              <div key={index} className="w-full text-left space-y-5">
                <span className="text-2xl font-bold md:text-[32px] font-cormorant text-[#1E2B3B] block">
                  {review.name}
                </span>
                <p className="text-sm font-Karla md:text-[16px] text-[#000000] capitalize">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Bewertungen;
