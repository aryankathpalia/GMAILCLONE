import React from 'react';
import { Box, Typography, Checkbox } from '@mui/material';
import { StarBorder } from '@mui/icons-material';
import { styled } from '@mui/system';

const Wrapper = styled(Box)({
    padding: '0 0 0 10px',
    background: '#f2f6fc',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& > div': {
        display: 'flex',
        width: '100%',
        '& > p': {
            fontSize: 14
        }
    }
});

const Indicator = styled(Typography)({
    fontSize: '12px !important',
    background: '#ddd',
    color: '#222',
    padding: '0 4px',
    borderRadius: 4,
    marginRight: 6
});

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 270,
    fontSize: 12,
    color: '#5f6368'
});

const Email = () => {
    return (
        <>
            <Wrapper>
                <Checkbox size="small" />
                <StarBorder fontSize='small' style={{ marginRight: 10 }} />
                <Box>
                    <Typography variant="body1" style={{ width: 200 }}>me</Typography>
                    <Indicator>Inbox</Indicator>
                    <Typography variant="body1">Hello - Hello from body</Typography>
                    <Date>01/18/23 11:09:59 PM</Date>
                </Box>
            </Wrapper>

            <Wrapper>
                <Checkbox size="small" />
                <StarBorder fontSize='small' style={{ marginRight: 10 }} />
                <Box>
                    <Typography variant="body1" style={{ width: 200 }}>me</Typography>
                    <Indicator>Inbox</Indicator>
                    <Typography variant="body1">This is test mail - Test Body</Typography>
                    <Date>01/19/23 10:09:59 AM</Date>
                </Box>
            </Wrapper>
        </>
    );
};

export default Email;
