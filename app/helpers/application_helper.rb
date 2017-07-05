module ApplicationHelper
  def active_link_to(name, path)
    opts = {}
    opts[:class] = 'active' if current_page?(path)
    link_to(name, path, opts)
  end
end