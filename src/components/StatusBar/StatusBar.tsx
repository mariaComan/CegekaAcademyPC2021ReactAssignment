import React from 'react';
import { Grid } from 'semantic-ui-react';

interface StatusBarProps {
    title: string;
}

const StatusBar: React.FC<StatusBarProps> = ({title, children}) => {
    return (
        <Grid columns='2'>
            <Grid.Column textAlign='center'>
                {title}
            </Grid.Column>

            <Grid.Column textAlign='right'>
                {children}
            </Grid.Column>
        </Grid>
    );
}

export default StatusBar;