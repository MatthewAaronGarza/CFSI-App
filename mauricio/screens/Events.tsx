import { View, Text, FlatList } from 'react-native'
import React from 'react'
import EventList from '../components/EventList'
import { Button, Card } from 'react-native-paper'
import EventOptions from '../components/EventOptions';

const data = [
    {
        title: "Aenean leo",
        body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
        title: "In turpis",
        body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
        title: "Lorem Ipsum",
        body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl: "https://picsum.photos/id/12/200/300",
    },
];

const Events = () => {
  return (
    //   <View style={{ flexDirection: "row" }}>
    //       {/* <View style={{ width: "20%" }}>
    //           <EventOptions />
    //       </View> */}
    //       {/* <View style={{ width: "80%" }}>
    //           <EventList />
    //       </View> */}
    //     <View>
    //         <EventList />
    //     </View>
    //   </View>
    <View>
        <EventList />
    </View>
  )
}

export default Events