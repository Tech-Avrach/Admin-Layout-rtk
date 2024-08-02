import AddUserInfo from './AddUserInfo'
import PageContainer from '../Layout/PageContainer'
import ContaierCard from '../ui/containerCard'
import { User } from 'lucide-react'

function AddUser() {
  return (
    <>
      <PageContainer
        pageTitleIcon={<User size={24} />}
        pageHeading="Add User"
        pageSubTitle="Create a new user"
      >
        <ContaierCard>
            <AddUserInfo />
        </ContaierCard>
      </PageContainer>
    </>
  )
}

export default AddUser