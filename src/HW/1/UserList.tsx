type AddressType = {
	street: string // ПОДПРАВЛЯЕМ any
	city: string // ПОДПРАВЛЯЕМ any
}

type UserType = {
	id: number
	name: string
	age: number
	address: AddressType
}

type UserListPropsType = {
	users: UserType[]
}

export const UserList = ({ users }: UserListPropsType) => {
	return (
		<div id={String(users[0].id)}>
			<h2>User List:</h2>

			<ul>
				{users.map(user => (
					<li key={user.id} id={`hw01-user-${user.id}`}>
						<strong>{user.name}</strong> (Age: {user.age})
						<strong> Address: </strong>
						{user.address.street}, {user.address.city}
					</li>
				))}
			</ul>
		</div>
	)
}
