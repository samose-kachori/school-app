import React from 'react';
import SectionA from './sectionA';
import SectionB from './sectionB';
import SectionC from './sectionC';
import SectionD from './sectionD';

class ScholarEnrollment extends React.Component
{
    render(){
        return (
            <div>
                <SectionA />
                <SectionB />
                <SectionC />
                <SectionD />
            </div>
        );
    }
}

export default ScholarEnrollment;