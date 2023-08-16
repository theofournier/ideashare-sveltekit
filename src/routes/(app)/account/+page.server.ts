import { fail } from '@sveltejs/kit'

export const actions = {
	update: async ({ request, locals: { supabase, getSession } }) => {
		const formData = await request.formData()
		const firstName = formData.get('firstName')?.toString()
		const lastName = formData.get('lastName')?.toString()
		const avatarUrl = formData.get('avatarUrl')?.toString()

		const session = await getSession()

		const { error } = await supabase.from('profiles').upsert({
			id: session?.user.id,
			first_name: firstName,
			last_name: lastName,
			avatar_url: avatarUrl,
			updated_at: new Date()
		})

		if (error) {
			return fail(500, {
				firstName,
				lastName,
				avatarUrl
			})
		}

		return {
			firstName,
			lastName,
			avatarUrl
		}
	},
}
