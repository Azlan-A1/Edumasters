import { Html } from '@react-email/html'
import { Container } from '@react-email/container'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'

export default function WelcomeEmail() {
	return (
		<Html>
			<Section>
				<Container>
					<Text>Welcome to Edumasters!</Text>
				</Container>
			</Section>
		</Html>
	)
}
