import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'elements';

  tab: { [key: string]: string } = {};

  constructor() {
    this.tab['H'] = 'Wodór (1)';
    this.tab['He'] = 'Hel (2)';
    this.tab['Li'] = 'Lit (3)';
    this.tab['Be'] = 'Beryl (4)';
    this.tab['B'] = 'Bor (5)';
    this.tab['C'] = 'Węgiel (6)';
    this.tab['N'] = 'Azot (7)';
    this.tab['O'] = 'Tlen (8)';
    this.tab['F'] = 'Fluor (9)';
    this.tab['Ne'] = 'Neon (10)';
    this.tab['Na'] = 'Sód (11)';
    this.tab['Mg'] = 'Magnez (12)';
    this.tab['Al'] = 'Glin (13)';
    this.tab['Si'] = 'Krzem (14)';
    this.tab['P'] = 'Fosfor (15)';
    this.tab['S'] = 'Siarka (16)';
    this.tab['Cl'] = 'Chlor (17)';
    this.tab['Ar'] = 'Argon (18)';
    this.tab['K'] = 'Potas (19)';
    this.tab['Ca'] = 'Wapń (20)';
    this.tab['Sc'] = 'Skand (21)';
    this.tab['Ti'] = 'Tytan (22)';
    this.tab['V'] = 'Wanad (23)';
    this.tab['Cr'] = 'Chrom (24)';
    this.tab['Mn'] = 'Mangan (25)';
    this.tab['Fe'] = 'Żelazo (26)';
    this.tab['Co'] = 'Kobalt (27)';
    this.tab['Ni'] = 'Nikiel (28)';
    this.tab['Cu'] = 'Miedź (29)';
    this.tab['Zn'] = 'Cynk (30)';
    this.tab['Ga'] = 'Gal (31)';
    this.tab['Ge'] = 'German (32)';
    this.tab['As'] = 'Arsen (33)';
    this.tab['Se'] = 'Selen (34)';
    this.tab['Br'] = 'Brom (35)';
    this.tab['Kr'] = 'Krypton (36)';
    this.tab['Rb'] = 'Rubid (37)';
    this.tab['Sr'] = 'Stront (38)';
    this.tab['Y'] = 'Itr (39)';
    this.tab['Zr'] = 'Cyrkon (40)';
    this.tab['Nb'] = 'Niob (41)';
    this.tab['Mo'] = 'Molibden (42)';
    this.tab['Tc'] = 'Technet (43)';
    this.tab['Ru'] = 'Ruten (44)';
    this.tab['Rh'] = 'Rod (45)';
    this.tab['Pd'] = 'Pallad (46)';
    this.tab['Ag'] = 'Srebro (47)';
    this.tab['Cd'] = 'Kadm (48)';
    this.tab['In'] = 'Ind (49)';
    this.tab['Sn'] = 'Cyna (50)';
    this.tab['Sb'] = 'Antymon (51)';
    this.tab['Te'] = 'Tellur (52)';
    this.tab['I'] = 'Jod (53)';
    this.tab['Xe'] = 'Ksenon (54)';
    this.tab['Cs'] = 'Cez (55)';
    this.tab['Ba'] = 'Bar (56)';
    this.tab['La'] = 'Lantan (57)';
    this.tab['Ce'] = 'Cer (58)';
    this.tab['Pr'] = 'Prazeodym (59)';
    this.tab['Nd'] = 'Neodym (60)';
    this.tab['Pm'] = 'Promet (61)';
    this.tab['Sm'] = 'Samar (62)';
    this.tab['Eu'] = 'Europ (63)';
    this.tab['Gd'] = 'Gadolin (64)';
    this.tab['Tb'] = 'Terb (65)';
    this.tab['Dy'] = 'Dysproz (66)';
    this.tab['Ho'] = 'Holm (67)';
    this.tab['Er'] = 'Erb (68)';
    this.tab['Tm'] = 'Tul (69)';
    this.tab['Yb'] = 'Iterb (70)';
    this.tab['Lu'] = 'Lutet (71)';
    this.tab['Hf'] = 'Hafn (72)';
    this.tab['Ta'] = 'Tantal (73)';
    this.tab['W'] = 'Wolfram (74)';
    this.tab['Re'] = 'Ren (75)';
    this.tab['Os'] = 'Osm (76)';
    this.tab['Ir'] = 'Iryd (77)';
    this.tab['Pt'] = 'Platyna (78)';
    this.tab['Au'] = 'Złoto (79)';
    this.tab['Hg'] = 'Rtęć (80)';
    this.tab['Tl'] = 'Tal (81)';
    this.tab['Pb'] = 'Ołów (82)';
    this.tab['Bi'] = 'Bizmut (83)';
    this.tab['Po'] = 'Polon (84)';
    this.tab['At'] = 'Astat (85)';
    this.tab['Rn'] = 'Radon (86)';
    this.tab['Fr'] = 'Franc (87)';
    this.tab['Ra'] = 'Rad (88)';
    this.tab['Ac'] = 'Aktyn (89)';
    this.tab['Th'] = 'Tor (90)';
    this.tab['Pa'] = 'Protaktyn (91)';
    this.tab['U'] = 'Uran (92)';
    this.tab['Np'] = 'Neptun (93)';
    this.tab['Pu'] = 'Pluton (94)';
    this.tab['Am'] = 'Ameryk (95)';
    this.tab['Cm'] = 'Kiur (96)';
    this.tab['Bk'] = 'Berkel (97)';
    this.tab['Cf'] = 'Kaliforn (98)';
    this.tab['Es'] = 'Einstein (99)';
    this.tab['Fm'] = 'Ferm (100)';
    this.tab['Md'] = 'Mendelew (101)';
    this.tab['No'] = 'Nobel (102)';
    this.tab['Lr'] = 'Lorens (103)';
    this.tab['Rf'] = 'Rutherford (104)';
    this.tab['Db'] = 'Dubn (105)';
    this.tab['Sg'] = 'Seaborg (106)';
    this.tab['Bh'] = 'Boh (107)';
    this.tab['Hs'] = 'Hass (108)';
    this.tab['Mt'] = 'Meitner (109)';
    this.tab['Ds'] = 'Darmsztadt (110)';
    this.tab['Rg'] = 'Roentgen (111)';
    this.tab['Cn'] = 'Kopernik (112)';
    this.tab['Nh'] = 'Nihon (113)';
    this.tab['Fl'] = 'Flerow (114)';
    this.tab['Mc'] = 'Moskow (115)';
    this.tab['Lv'] = 'Liwermor (116)';
    this.tab['Ts'] = 'Tenes (117)';
    this.tab['Og'] = 'Oganesson (118)';
  }

  text: string = '';
  wypluj: string = '';

  start(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.text = input.value;
    this.wypluj = '';

    for (let i = 0; i < this.text.length; i++) {
      if (i < this.text.length) {
        if (this.tab[this.text[i].toUpperCase() + this.text[i + 1]]) {
          this.wypluj +=
            this.text[i].toUpperCase() +
            this.text[i + 1].toLowerCase() +
            '  =>  ' +
            this.tab[
              this.text[i].toUpperCase() + this.text[i + 1].toLowerCase()
            ] +
            '<br>';
          continue;
        }
      }

      if (this.tab[this.text[i].toUpperCase()]) {
        this.wypluj +=
          this.text[i].toUpperCase() +
          '  =>  ' +
          this.tab[this.text[i].toUpperCase()] +
          '<br>';
      }
    }
  }
}
