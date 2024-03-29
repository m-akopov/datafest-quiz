import { Component } from "react";

export default class FinalResult extends Component<{ score: number, questionsCount: number, onRestartHandler: () => void }>{
    render() {
        console.log(this.props.score);
        var score ="";
        var shortDesc = "";
        var desc = "";
        var bgClass = "";
        if(this.props.score === 0){
             score = "0";
             shortDesc = "ძალადობა გამოხატული არაა";
             desc = "შეგიძლიათ მშვიდად იყოთ, თქვენი ქულების მაჩვენებელი მიუთითებს, რომ <b>არაძალადობრივ ურთიერთობაში ხართ.</b>";
             bgClass = "result-1";
        }else if(this.props.score < 45){
            score = "1-44";
            shortDesc = "მსუბუქად გამოხატული ძალადობა";
            desc = "ამ დიაპაზონში მიღებული ქულები მიუთითებს, რომ თქვენს ურთიერთობაში <b>გარკვეული სირთულეებია.</b><br/> თქვენს მიერ განცდილი ძალადობა არ არის აშკარა ან თვალსაჩინო, <b>თუმცა შეიძლება სასარგებლო იყოს პროფესიონალთან კონსულტაცია,<b> რათა დადგინდეს, არის თუ არა ეს ნამდვილად ძალადობა.";
            bgClass = "result-2";
       }else if(this.props.score < 85){
            score = "45-84";
            shortDesc = "საშუალოდ გამოხატული ძალადობა";
            desc = "თქვენი ქულები გამოხატული ძალადობის საშუალო დიაპაზონშია, მნიშვნელოვანია, <b>რაც შეიძლება მალე მიმართოთ ფსიქიკური ჯანმრთელობის პროფესიონალს ან სოციალურ სამსახურს.<b>";
            bgClass = "result-3";
        }else if(this.props.score <= 126){
            score = "85-126";
            shortDesc = "მწვავედ გამოხატული ძალადობა";
            desc = "ამ დიაპაზონში მიღებული ქულები მიუთითებს, რომ თქვენს მიმართ პარტნიორის მხრიდან ძალადობა <b>მძიმე და აშკარაა.<b> თუ აღნიშნული გამოცდილება ოჯახში ძალადობის ფარგლებში ხდება <b>მნიშვნელოვანია იცოდეთ, როგორ მართოთ სიტუაცია უსაფრთხოდ.</b> ამისთვის საჭირო <b>გადაუდებლად მიმართოთ შესაბამის სამსახურს ან/და სპეციალისტ(ებ)ს.</b>";
            bgClass = "result-4";
        }

        return <div className={`final-results-wrapper-bg ${bgClass}`}>
            <div className='final-results-wrapper'>
                <span className="score-short-desc">{shortDesc}</span> <br/>
                
                <span className="score-full-desc" dangerouslySetInnerHTML={{ __html: desc }}/><br/>
                <div className={`result-heart-separator`}></div> <br/>

                
                <span className="primary-button" onClick={() => {
                         this.props.onRestartHandler();
                    }}>თავიდან დაწყება</span> 

                {this.props.score > 0 ? 
                    <div className="general-contact-info-wrapper">
                    <span className="sub-title">იმ შემთხვევაში, თუ თვლით, რომ ძალადობის მსხვერპლი ხართ, შეგიძლიათ:</span>
დარეკოთ <a href="tel:0322116006;"> 116 006 </a>ნომერზე, რომელიც არის ძალადობის საკითხებზე
საკონსულტაციო 24-საათიანი უფასო ცხელი ხაზი. კონფიდენციალურობა
დაცულია, გარდა კანონით დადგენილი წესისა;<br/>
საქართველოში ფუნქციონირებს 5 თავშესაფარი (თბილისი 24/7; ბათუმი 24/7;
გორი 24/7; კახეთი 24/7; ქუთაისი 24/7) და 5 კრიზისული ცენტრი (თბილისი 24/7;
გორი 12/5; ქუთაისი 12/5; მარნეული 12/5; ოზურგეთი 12/5), სადაც სავარაუდო
მსხვერპლებს შეუძლიათ მიიღონ:
<ul>
<li>სამართლებრივი მომსახურება;</li>
<li>ფსიქოლოგიურ–სოციალური რეაბილიტაცია/მომსახურება;</li>
<li>სამედიცინო მომსახურების მიღების ორგანიზება;</li>
<li>საჭიროების შემთხვევაში, თარჯიმნის მომსახურება;</li>
<li>ერთი ფანჯრის პრინციპით - საჭიროებიდან გამომდინარე, რელევანტური
უწყების ჩართვა;</li>
<li>ინდივიდუალური, მულტიმოდალური მოდელით შემთხვევის მართვის
შედგენა/გადასინჯვა/შეფასება;</li>
<li>არასრულწლოვანთა და მსხვერპლზე დამოკიდებულ პირთა მხარდაჭერა,
განათლების მიღების ნაწილში;</li>
<li>დამოუკიდებელი ცხოვრების სტიმულირების მიზნით, საჭირო
ღონისძიებების გატარება;</li>
</ul>
არასამთავრობო ორგანიზაციები, რომლებსაც შეუძლიათ გაუწიონ სავარაუდო
მსხვერპლებს უფასო იურიდიული კონსულტაცია (რაც შესაძლოა
სასამართლოში წარმომადგენლობასაც მოიცავდეს) და ფსიქოლოგთან ვიზიტი:<br/>
<b>საფარი:</b> საკონსულტაციო ხაზი: <a href="tel:599407603">599 407 603 </a><br/>
<b>უფლებები საქართველო:</b> ტელ. ნომერი <a href="tel:0322998856">+995 (32) 299 88 56</a><br/>
<b>წამების მსხვერპლთა ფსიქოსოციალური და სამედიცინო რეაბილიტაციის<br/>
ცენტრი GCRT:</b> ტელეფონი: <a href="tel:0322220689">2 220 689;</a> ელ. ფოსტა: <a href="mailto:info@gcrt.ge" target="_blank">info@gcrt.ge</a> <br/>
<b>ქალთა ინიციატივების მხარდამჭერი ჯგუფი:</b> საკონსულტაციო ცხელი ხაზი <a href="tel:595190303">595 19 03 03</a><br/>
შეგიძლიათ, ასევე, ჩამოწეროთ <b><a href="https://play.google.com/store/apps/details?id=mia.emergency_georgia_112" target="_blank">112 GEORGIA(Android) </a> &nbsp;&nbsp;
<a href="https://apps.apple.com/us/app/112-georgia/id1155386092" target="_blank">112 GEORGIA(iOS) </a>
ან/და <a href="https://play.google.com/store/apps/details?id=fambox.pro&fbclid" target="_blank"> Safe You(Android) </a>  &nbsp;&nbsp;
</b> <a href="https://apps.apple.com/us/app/safe-you/id1491665304" target="_blank"> Safe You(iOS) </a> აპლიკაცია,
საიდანაც მიიღებთ დამატებით ინფორმაციას, ასევე შეძლებთ ძალადობის
შესახებ შეტყობინების გაკეთებას.    
                    </div>
                    :null
                }
                {/* <button onClick={this.props.onRestartHandler}>Restart game</button> */}

            </div>
        </div>
    }
}