import React from 'react';
import { Header, Segment, Icon, Input } from 'semantic-ui-react';


class MessagesHeader extends React.Component {
    render(){

        const {channelName, numUniqueUsers, handleSearchChange,searchLoading,isPrivateChannel,isChannelStarred,handleStar} = this.props;
        return(
            // Channel Title 
            <Segment clearing>
                <Header fluid='true' as="h2" floated="left" style={{marginBottom:0}}>
                    <span>
                    {channelName} 
                    {!isPrivateChannel && 
                    (<Icon 
                      onClick={handleStar} 
                      name={isChannelStarred ? 'star' : 'star outline'} 
                      color= {isChannelStarred ? 'yellow' : 'black'}
                    />)}
                    </span>
                    <Header.Subheader>{numUniqueUsers}</Header.Subheader>
                </Header>

                {/* Message Searching  */}
                <Header floated="right">
                    <Input 
                      loading = {searchLoading}
                      size="mini"
                      icon="search"
                      name="searchTerm"
                      placeholder="Search Messages"
                      onChange = {handleSearchChange}
                    />
                </Header>
            </Segment>

        )
    }
}

export default MessagesHeader;