import React from 'react'
import { Progress  } from 'reactstrap';
import PropTypes from 'prop-types';
import { UserInfosStep, CalendarStep, FinalStep } from './steps';

export const PatientFormContext = React.createContext();
export const PROGRESS_VALUES = {
  'step_1' : '15',
  'step_2' : '45',
  'step_3': '85'
}

export function PatientForm({cancelProcessRegistration}) {
  const [patientFormState, setPatientFormState] =  React.useState({
    firstName : '',
    lastName : '',
    phone: '',
    selectedEvent : 
    {
      id: null, 
      label : ''
    },
    progressValue: PROGRESS_VALUES.step_1
  })

  return (
    <PatientFormContext.Provider value={{
      patientFormState, setPatientFormState
    }}>

        {PROGRESS_VALUES.step_1 === patientFormState.progressValue && ( 
          <UserInfosStep cancelProcessRegistration={cancelProcessRegistration}>
            <Progress animated value={patientFormState.progressValue} />
          </UserInfosStep>
        )}
        {PROGRESS_VALUES.step_2 === patientFormState.progressValue && ( 
          <CalendarStep>
            <Progress animated value={patientFormState.progressValue} />
          </CalendarStep>
        )}
        {PROGRESS_VALUES.step_3 === patientFormState.progressValue && ( 
          <FinalStep>
            <Progress animated value={patientFormState.progressValue} />
          </FinalStep>
        )}
    </PatientFormContext.Provider>
  )
}

PatientForm.propTypes  = {
  cancelProcessRegistration: PropTypes.func.isRequired
}