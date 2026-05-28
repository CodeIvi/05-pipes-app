import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale';
@Component({
  selector: 'app-basic-pages',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-pages.html',
})
export default class BasicPages {
  localService = inject(LocaleService)
  currentLocale = signal(inject(LOCALE_ID));


  nameLower = signal('ivan');
  nameUpper = signal('IVAN');
  fullName = signal('IvAn AlArCoN');

  customDate = signal(new Date());
  
  tickingDateEffect = effect((onCleanup)=>{
    const interval = setInterval(()=>{
      this.customDate.set(new Date())
    },1000);

    onCleanup(()=>{
      clearInterval(interval);
    })
  })

  changeLocale(locale: AvailableLocale){
    console.log(locale);
     this.localService.changeLocale(locale);
  }
}
