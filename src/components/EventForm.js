import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const FormContent = styled.div`
  flex: 3;
  padding: 20px;
  background-color: #f9f9f9;
`;

const EventDetails = styled.div`
  flex: 2;
  padding: 20px;
  background-color: #e0f7fa;
`;

const FormGroupRow = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  width: calc(48% - 8px);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const EventCard = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  .date-container {
    flex: 0 0 80px;
    height: 80px;
    background-color: #4caf50;
    color: white;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 16px;
  }

  .date {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .month {
    font-size: 14px;
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 20px; 
    margin-bottom: 8px; 
    color: #333;
  }

  // ... (other imports and styles)

h2{
 
  text-align: center; 
}

// ... (rest of the code remains unchanged)


  p {
    margin: 4px 0; 
    font-size: 14px;
    color: #555;
  }
`;



const NoEventsMessage = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
`;

const EventForm = () => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    eventType: '',
    organizerContact: '',
  });

  const [events, setEvents] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { ...eventData };
    setEvents([...events, newEvent]);
    setEventData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      eventType: '',
      organizerContact: '',
    });
    console.log('Form submitted:', newEvent);
  };

  return (
    <Container>
      <FormContent>
      <h2 style={{ textAlign: 'center' }}>Create Event</h2>
        <form onSubmit={handleSubmit}>
          <FormGroupRow>
            <InputWrapper>
              <FormGroup>
                <Label htmlFor="title">Event Title</Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={eventData.title}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </InputWrapper>

            <InputWrapper>
              <FormGroup>
                <Label htmlFor="date">Date</Label>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </InputWrapper>
          </FormGroupRow>

          <FormGroupRow>
            <InputWrapper>
              <FormGroup>
                <Label htmlFor="time">Time</Label>
                <Input
                  type="time"
                  id="time"
                  name="time"
                  value={eventData.time}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </InputWrapper>

            <InputWrapper>
              <FormGroup>
                <Label htmlFor="location">Location</Label>
                <Input
                  type="text"
                  id="location"
                  name="location"
                  value={eventData.location}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </InputWrapper>
          </FormGroupRow>

        

          <FormGroupRow>
            <InputWrapper>
              <FormGroup>
                <Label htmlFor="eventType">Event Type</Label>
                <Input
                  type="text"
                  id="eventType"
                  name="eventType"
                  value={eventData.eventType}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </InputWrapper>

            <InputWrapper>
              <FormGroup>
                <Label htmlFor="organizerContact">Organizer's Contact Information</Label>
                <Input
                  type="text"
                  id="organizerContact"
                  name="organizerContact"
                  value={eventData.organizerContact}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </InputWrapper>
          </FormGroupRow>

          <Button type="submit">Create Event</Button>
        </form>
      </FormContent>

      <EventDetails>
      <h2 style={{ textAlign: 'center' }}>Upcoming Events</h2>

        {events.length > 0 ? (
          events.map((event, index) => {
            const eventDate = new Date(event.date);
            const dateOptions = { day: 'numeric' };
            const monthOptions = { month: 'short' };

            return (
              <EventCard key={index}>
                <div className="date-container">
                  <div className="date">{eventDate.toLocaleDateString('en-US', dateOptions)}</div>
                  <div className="month">{eventDate.toLocaleDateString('en-US', monthOptions)}</div>
                </div>
                <div className="details">
                  <h3>{event.title}</h3>
                  <p>Time: {event.time}</p>
                  <p>Location: {event.location}</p>
                  <p>Event Type: {event.eventType}</p>
                  <p>Organizer's Contact: {event.organizerContact}</p>
                </div>
              </EventCard>
            );
          })
        ) : (
          <NoEventsMessage style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '129px', fontSize: '28px' }}>
  No Upcoming Events ....
</NoEventsMessage>

        )}
      </EventDetails>
    </Container>
  );
};

export default EventForm;
