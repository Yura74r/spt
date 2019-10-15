import React from 'react';
import { View, Root } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, Div, ScreenSpinner, PanelHeader, IOS, platform, HeaderButton, Button, TabbarItem, Epic, Tabbar, Group, List, FormLayout} from '@vkontakte/vkui';
import Icon28Info_outline from '@vkontakte/icons/dist/28/info_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import s1 from './img/s1.jpg';
import s2 from './img/2.png';

const osname = platform();


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeStory: 'service',
	  slideIndex: 0,
	  popout: null
      
    };
    this.onStoryChange = this.onStoryChange.bind(this);
  }  
  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }
  
  
  onClick () {
    this.setState({ popout: <ScreenSpinner /> });
    setTimeout(() => { this.setState({ popout: null }) }, 2000);
  }
    
  
 
   


	render() {
		return (
			
      <Epic activeStory={this.state.activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            selected={this.state.activeStory === 'service'}
			onClick={this.onStoryChange}			
            data-story="service"
            text="Сервис"
          ><Icon28ServicesOutline/></TabbarItem>
          <TabbarItem
			onClick={ this.onStoryChange}
			onClick={this.onStoryChange}
            selected={this.state.activeStory === 'info'}
            data-story="info"
            text="О скорости"
          ><Icon28Info_outline /></TabbarItem>
          
        </Tabbar>
      }>
        
        <View popout={this.state.popout}  id="service" activePanel="service">
          <Panel id="service">
            <PanelHeader>Тест скорости</PanelHeader>
            <Group title= "Что такое тест скорости интернета?">
                <Div>
                  Тест скорости интернета позволяет проверить состояние канала, измерить его функциональные возможности.  
                </Div>   
            </Group>
            <Group title= "Запустить тест с помошью: ">
            <FormLayout>
            <img style={{ width: '100%', margin: 'auto' }} src={s1} />
              <Button size="xl" level="secondary" onClick={() => this.setState({ activeStory: 't1' })}>
              Запустить
              </Button>
              <img style={{ width: '100%', margin: 'auto' }} src={s2} />

              <Button size="xl" level="secondary" onClick={() => this.setState({ activeStory: 't2' })}>
              Запустить
              </Button>
            </FormLayout>
            </Group>
            
          </Panel>
        </View>
        <View popout={this.state.popout}  id="info" activePanel="info" >
          <Panel id="info">
          
            <PanelHeader> Полезно знать </PanelHeader>
            <Group>
                <Div>
                <strong>Сколько это — один Мбит? </strong><br/><br/>
                Мы с вами не будем углубляться в дискретную математику, чтобы подробно изучать, что из себя представляет мера скорости Интернета. Достаточно будет сказать, чтобы не вводить некоторых в заблуждение, что Мбиты и Мбайты – это разные единицы измерения информации.
                <br/><br/>
                Если 1 МБайт = 8 МБит то со скоростью 16 Мбит будет скачиваться 2 Мбайта (мегабайта) в секунду информации из сети. 
                </Div>   
            </Group>
            
            <Group>
                <Div>
                <strong>Какой должна быть скорость Интернета для онлайн игр и просмотра фильмов? </strong><br/><br/>
                  Игры и фильмы онлайн являются самыми Интернет-потребляемыми задачами для компьютера. Не всегда скорости, которую вы оплатили является нормальной для обеспечения просмотра фильма онлайн в HD-качестве. И здесь нет никаких мошеннических действий со стороны провайдера. Все дело в том, что нет ни одного Интернет-провайдера, который бы смог обеспечить круглосуточную стабильную скорость передаваемой информации. Этому способствует различные факторы – от элементарной нагрузки сети, до возможностей вашего компьютера и расположения в сети.
                  <br/><br/>
                  Чаще с этим вопросом обращаются именно геймеры, ведь для результативной и интересной игры им просто необходимо использовать стабильную скорость Интернета. Известны цифры скорости передачи данных по сети, которые необходимы для самых популярных онлайн-игр.
                  <br/><br/> Для тех, кто любит фантастический мир World of Warcraft – вполне достаточно будет 512 Мбит скорости.<br/><br/>
                  Игры World of Tanks и Dota находятся на одной ступени Интернет-потребления – до 1 Мбит.<br/><br/>
                  Для Counter Strike достаточно также половины Мбита.<br/><br/>
                  Стоит учесть еще и вид передачи данных. Если у вас подключен пакет с 16 Мбитами, который реализуется при помощи спутникового сигнала, то вполне вероятно, что Интернет-соединение с 10 Мбитами, которое подключено при помощи кабеля будет лучше и быстрее. Это происходит по той причине, что беспроводное соединение характеризуется большой потерей пакетов данных при передаче.
                  <br/><br/>
                  Для того, чтобы смотреть фильмы в разном качестве сегодня необходимо знать приблизительную нужную скорость Интернета.<br/><br/>
              
                  Чтобы смотреть видео с типом трансляции 360p, нужно Интернет-соединение со скоростью около 1 Мбита (Почему тормозит видео в интернете?).
                  Для просмотра трансляции с 720p будет достаточно 5 Мбит.<br/><br/>
                  Чтобы просматривать онлайн видео в качестве Ultra HD 4K, необходимо более 30 Мбит в секунду.<br/><br/>
                </Div>   
            </Group>
            <Group>
                <Div>
                <strong>Для каких целей необходима скорость Интернета больше 30 Мбит в секунду?</strong><br/><br/>
                На данный момент есть и более быстрые подключения, но и стоят они соответственно дорого. Не каждый Интернет-провайдер способен обеспечить скорость более 30 Мбит. В первую очередь такая скорость понадобиться тем, кто имеет дорогие и мощные устройства, телевизоры с высоким разрешением, компьютеры с большой производительностью, которые позволяют воспроизводить требовательный контент. Также в высокой скорости нуждаются пользователи, которые часто выгружают в сеть различные ролики, программы, игры больших объемов. Поэтому понятие нормальной скорости Интернета зависит в первую очередь от ваших задач.
                Всем, кто использует Интернет лишь для ознакомительных целей – посещение социальных сетей, интернет-журналов, чтение книг онлайн, вполне достаточно будет скорости в 1 Мбит качественного соединения (с минимальными потерями пакетов или низким ping).
                <br/><br/>
                Для тех, кто более требователен к глобальной сети, скажем, средний сегмент (а таких пользователей большая часть) – нечастое скачивание файлов, просмотр видеороликов Youtube и онлайн-фильмов, использование онлайн-игр и т.п. будет достаточной скорость от 10 Мбит/сек.
                </Div>   
            </Group>

                
				
                
          </Panel>
        </View>
        <View popout={this.state.popout}  id="t1" activePanel="t1" >
          <Panel id="t1">
          
            <PanelHeader
                  left={<HeaderButton onClick={() => this.setState({ activeStory: 'service' })} 
                 >{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</HeaderButton>}>
                 OpenSpeedTest </PanelHeader>
                
				<iframe width="100%" height="420px" frameborder="0" src="http://openspeedtest.com/Get-widget.php"></iframe>
                
          </Panel>
        </View>
        <View popout={this.state.popout}  id="t2" activePanel="t2" >
          <Panel id="t2">
          
            <PanelHeader
                  left={<HeaderButton onClick={() => this.setState({ activeStory: 'service' })} 
                 >{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</HeaderButton>}>
                 SPEEDTEST </PanelHeader>
                
				<iframe width="100%" height="650px" frameborder="0" src="https://madefood.info/1"></iframe>
                
          </Panel>
        </View>
		
        
      </Epic>
    )
  }
}
  


export default App;
