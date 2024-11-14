import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://media.istockphoto.com/id/155385236/ko/%EC%82%AC%EC%A7%84/dolsot-bibimbap.jpg?s=612x612&w=0&k=20&c=If-iZnVAnrFhGloEpchKWLBJYLeh-Tx2yHdLtF9zTtg=",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://media.istockphoto.com/id/155385236/ko/%EC%82%AC%EC%A7%84/dolsot-bibimbap.jpg?s=612x612&w=0&k=20&c=If-iZnVAnrFhGloEpchKWLBJYLeh-Tx2yHdLtF9zTtg=",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}

export default HomePage;
